<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="nama">Nama</label>
        <input
          type="text"
          class="form-control"
          id="nama"
          required
          v-model="user.nama"
          name="nama"
        />
      </div>

      <div class="form-group">
        <label for="nip">NIP</label>
        <input
          class="form-control"
          id="nip"
          required
          v-model="user.nip"
          name="nip"
        />
      </div>
      <div class="form-group">
        <label for="alamat">Alamat</label>
        <input
          class="form-control"
          id="alamat"
          required
          v-model="user.alamat"
          name="alamat"
        />
      </div>
      <div class="form-group">
        <label for="nohp">Nomor HP</label>
        <input
          class="form-control"
          id="nohp"
          required
          v-model="user.nohp"
          name="nohp"
        />
      </div>
      <div class="form-group">
        <label for="email">E-mail</label>
        <input
          class="form-control"
          id="email"
          required
          v-model="user.email"
          name="email"
        />
      </div>

      <button @click="saveUser" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newUser">Add</button>
    </div>
  </div>
</template>

<script>
import UserDataService from "../services/UserDataService";

export default {
  name: "add-user",
  data() {
    return {
      user: {
        id: null,
        nama: "",
        nip: "",
        alamat: "",
        nohp: "",
        email: ""
        
      },
      submitted: false
    };
  },
  methods: {
    saveUser() {
      var data = {
        nama: this.user.nama,
        nip: this.user.nip,
        alamat: this.user.alamat,
        nohp: this.user.nohp,
        email: this.user.email,
      };

      UserDataService.create(data)
        .then(response => {
          this.user.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newUser() {
      this.submitted = false;
      this.user = {};
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>