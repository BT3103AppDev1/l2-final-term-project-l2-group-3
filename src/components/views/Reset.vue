<template>
    <div class="reset-container">
      <v-img
        class="mx-auto my-6"
        max-width="520"
        src="@/assets/kiasulogo.png"
      ></v-img>
      <v-card
        class="mx-auto pa-16 pb-16"
        elevation="8"
        max-width="600"
        rounded="lg"
      >
      <div class="rp">Reset Password</div>
      <div class="desc">Password should contain at least 8 characters, one uppercase and one special case</div> <br>


      <div>New Password</div>
        <v-text-field
        dense
        placeholder="**********"
        variant="outlined"
        ></v-text-field>

      <div>Confirm Password</div>
        <v-text-field
        dense
        placeholder="**********"
        variant="outlined"
        ></v-text-field>

        <router-link to="/login"><v-btn
          class="mb-8"
          color="blue"
          size="large"
          variant="tonal"
          block
        >
          Reset Password
        </v-btn>
    </router-link>    
    </v-card>


    </div>
  
</template>

<style>

.reset-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f2f2f2;
}

.rp{
    font-weight: bold;
    font-size: larger;
}



.mb-8 {
    margin-bottom: 32px;
}
  

</style>