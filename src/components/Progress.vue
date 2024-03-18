<template>
    <h2 class="subheading">Progress and Reminders</h2>

    <v-container>
        <v-row>
            <v-col cols="12">
                <v-card :style="{ opacity: '0.8' }" color="#95adc5" class="pa-3" height="400px">
                    <v-card-title style="text-align: center;">Daily target</v-card-title>
                    <v-card-subtitle style="text-align: center;">Here are the list of jobs according to your preference!</v-card-subtitle>
                </v-card>
            </v-col>
        </v-row>    

        <v-row class="ga-5">
            <v-col cols="12">
                <v-card :style="{ opacity: '0.8' }" color="#95adc5" class="pa-3" height="400px">
                    <v-card-title style="text-align: center;">Reminders</v-card-title>
                </v-card>
            </v-col>
        </v-row>
    </v-container>

    
    
</template>

<style scoped>
.subheading{
    color:rgb(255, 253, 253);
    margin-top: 20px;
    font-weight: 500;

}

.pa-3 {
    border-radius: 20px;
    box-shadow: none;
}

</style>