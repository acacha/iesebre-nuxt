<template>
  <v-card data-test="auth_login_card">
    <v-card-title class="justify-center">
      <span class="headline" data-test="auth_login_card_title">Entrar</span>
    </v-card-title>
    <v-card-text>
      <v-form ref="loginForm" v-model="valid">
        <v-text-field
          id="login_email"
          v-model="email"
          name="email"
          label="Correu electrònic"
          :rules="emailRules"
          :error="errors['email'] && true"
          :error-messages="errors['email']"
          data-test="auth_login_input_email"
          required
        />
        <v-text-field
          id="login_password"
          v-model="password"
          name="password"
          label="Password"
          :rules="passwordRules"
          hint="At least 6 characters"
          min="6"
          type="password"
          data-test="auth_login_input_password"
          required
        />
        <v-tooltip bottom class="pb-0">
          <!--          https://vuejs.org/v2/guide/components-slots.html#Named-Slots-Shorthand -->
          <!--          També es possible utilitza #activator en comptes v-slot:activator-->
          <!--          https://vuejs.org/v2/guide/syntax.html#v-on-Shorthand-->
          <template v-slot:activator="{ on }">
            <v-checkbox
              slot="activator"
              v-model="remember"
              name="remember"
              label="Recordeu el meu usuari"
              v-on="on"
            />
          </template>

          <span>Es recordara el vostre usuari en aquesta màquina</span>
        </v-tooltip>
      </v-form>
      <v-container grid-list-md text-xs-center class="pt-0 pb-0">
        <v-layout row wrap>
          <v-flex xs12>
            <v-flex xs12>
              <a href="/password/reset" color="blue darken-2">He oblidat la meva paraula de pas</a>
            </v-flex>
            <v-flex xs12>
              <a href="/register" color="blue darken-2">Registrar-se</a>
            </v-flex>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
    <v-card-actions class="pt-0">
      <v-spacer />
      <v-btn
        color="blue darken-2"
        text
        data-test="auth_login_button_close"
        @click.native="showLogin = false"
      >
        Tancar
      </v-btn>
      <v-btn
        id="login_button"
        color="blue darken-2"
        class="white--text"
        data-test="auth_login_button_login"
        :loading="loginLoading"
        @click.native="login"
      >
        Login
      </v-btn>
      <v-spacer />
    </v-card-actions>
    <v-divider class="mt-3" />
    <v-container grid-list-md text-xs-center class="pt-2">
      <v-layout>
        <v-flex xs12>
          Login amb xarxes socials:
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-md text-xs-center class="pt-0">
      <v-layout>
        <v-flex xs12>
          <v-btn href="/auth/facebook" style="background-color: #3b5998;" class="white--text">
            <span class="ml-1">Login amb Facebook</span>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
export default {
  layout: 'auth',
  data () {
    return {
      loginLoading: false,
      errors: [],
      email: '',
      password: '',
      valid: false,
      emailRules: [
        v => !!v || 'Email is mandatory',
        /* eslint-disable no-useless-escape */
        v => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Email have to be a valid email'
      ],
      passwordRules: [
        v => !!v || 'La paraula de pas és obligatòria',
        v => v.length >= 6 || 'La paraula de pas ha de tenir com a mínim 6 caràcters'
      ]
    }
  },
  methods: {
    remember () {}
  }
}
</script>
