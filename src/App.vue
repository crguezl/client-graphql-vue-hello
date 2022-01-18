<template>
  <div id="app">
    <h1>Agenda</h1>
    <table border="1" width="100%" style="border-collapse: collapse">
      <tr>
        <th>ID</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Actions</th>
      </tr>

      <tr v-for="contact in contactos" :key="contact.id">
        <td>{{ contact.id }}</td>
        <td>{{ contact.firstName }}</td>
        <td>{{ contact.lastName }}</td>
        <td>{{ contact.email }}</td>
        <td>
          <input
            type="button"
            @click="selectContact(contact)"
            value="Select"
            class="btn btn-primary"
          />
          <input
            type="button"
            @click="deleteContact(contact.id)"
            value="Delete"
            class="btn btn-cancel"
          />
        </td>
      </tr>
    </table>

    <br />
    <div v-if="id">
      <h2>Update Contact</h2>
    </div>
    <div v-else>
      <h2>Create new Contact</h2>
    </div>

    <form>
      <label>First Name: </label>
      <input type="text" name="firstName" v-model="firstName" />
      <br />

      <label>Last Name: </label>
      <input type="text" name="lastName" v-model="lastName" />
      <br />

      <label>Email: </label>
      <input type="email" name="email" v-model="email" />
      <br />

      <input
        v-if="id"
        type="button"
        class="btn btn-secondary"
        @click="updateContact(id, firstName, lastName, email)"
        value="Update Contact"
      />
      <input
        v-else
        type="button"
        class="btn btn-primary"
        @click="createContact(firstName, lastName, email)"
        value="Add new Contact"
      />

      <input
        type="button"
        class="btn btn-cancel"
        @click="clearForm()"
        value="Clear Form"
      />
    </form>
  </div>
</template>

<script>
import gql from "graphql-tag";
// This is an example of how to load a separated GraphQL file. See file vue.config.js
import {
  createContactMutation,
  updateContactMutation,
} from "./create-contact.gql";

export default {
  name: "app",
  data() {
    return {
      id: null,
      firstName: "",
      lastName: "",
      email: "",
    };
  },
  apollo: {
    // See https://apollo.vuejs.org/guide/apollo/#queries  Vue-Apollo options here
    // In the apollo object, add an attribute for each property you want to feed with the result of an Apollo query
    contactos: { // See https://apollo.vuejs.org/guide/apollo/queries.html#name-matching
      query: gql`
        query {
          contacts {
            id
            firstName
            lastName
            email
          }
        }
      `,
      update: (data) => data.contacts,
    },
  },
  methods: {
    createContact(firstName, lastName, email) {
      // https://apollo.vuejs.org/api/dollar-apollo.html the $apollo api
      this.$apollo.mutate({
        // See https://apollo.vuejs.org/guide/apollo/#mutations
        mutation: createContactMutation,
        variables: {
          // https://apollo.vuejs.org/guide/apollo/queries.html#query-with-parameters
          firstName: firstName,
          lastName: lastName,
          email: email,
        },
      });
      location.reload();
    },
    updateContact(id, firstName, lastName, email) {
      //console.log(`Update contact: # ${id}`);
      this.$apollo.mutate({
        mutation: updateContactMutation,
        variables: {
          id: id,
          firstName: firstName,
          lastName: lastName,
          email: email,
        },
      });
      location.reload(); // refresh the page
    },
    deleteContact(id) {
      //console.log(`Delete contact: # ${id}`);
      this.$apollo.mutate({
        mutation: gql`
          mutation deleteContact($id: ID!) {
            deleteContact(id: $id)
          }
        `,
        variables: {
          id: id,
        },
      });
      location.reload();
    },
    selectContact(contact) {
      this.id = contact.id;
      this.firstName = contact.firstName;
      this.lastName = contact.lastName;
      this.email = contact.email;
    },
    clearForm() {
      this.id = null;
      this.firstName = "";
      this.lastName = "";
      this.email = "";
    },
  },
};
</script>

<style scoped src="./App.css">
</style>
