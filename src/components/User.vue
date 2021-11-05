<template>
  <div v-if="currentUser" class="edit-form">
    <h4>User</h4>
    <form>
      <div class="form-group">
        <label for="nama">Nama</label>
        <input type="text" class="form-control" id="nama"
          v-model="currentUser.nama"
        />
      </div>
      <div class="form-group">
        <label for="nip">NIP</label>
        <input type="text" class="form-control" id="nip"
          v-model="currentUser.nip"
        />
      </div>
      <div class="form-group">
        <label for="nip">Alamat</label>
        <input type="text" class="form-control" id="alamat"
          v-model="currentUser.alamat"
        />
      </div>
      <div class="form-group">
        <label for="nip">No HP</label>
        <input type="text" class="form-control" id="nohp"
          v-model="currentUser.nohp"
        />
      </div>
      <div class="form-group">
        <label for="nip">E-mail</label>
        <input type="text" class="form-control" id="email"
          v-model="currentUser.email"
        />
      </div>
    </form>

    <button class="badge badge-danger mr-2"
      @click="deleteUser"
    >
      Delete
    </button>

    <button type="submit" class="badge badge-success"
      @click="updateUser"
    >
      Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a User...</p>
  </div>
</template>

<script>
import UserDataService from "../services/UserDataService";

export default {
  name: "user",
  data() {
    return {
      currentUser: null,
      message: ''
    };
  },
  methods: {
    getUser(id) {
      UserDataService.get(id)
        .then(response => {
          this.currentUser = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updateUser() {
      UserDataService.update(this.currentUser.id, this.currentUser)
        .then(response => {
          console.log(response.data);
          this.message = 'The User was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },

    deleteUser() {
      UserDataService.delete(this.currentUser.id)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "users" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getUser(this.$route.params.id);
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>