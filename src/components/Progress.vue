<template>
    <h2 class="subheading">Progress and Reminders</h2>

    <v-container style="margin-top: -10px;">
        <v-row>
            <v-col cols="12">
                <v-card variant="elevated" color="#ffffff" class="pa-3" height="400px">
                    <v-card-title style="text-align: center;">Daily target</v-card-title>
                    <v-card-subtitle style="text-align: center;">Here are the list of jobs according to your preference!</v-card-subtitle>
                </v-card>
            </v-col>
        </v-row>    

        <v-row class="ga-5">
            <v-col cols="12">
                <v-card variant="elevated" color="#ffffff" class="pa-3" height="400px">
                    <v-card-title style="text-align: center;">Reminders</v-card-title>
                </v-card>
            </v-col>
        </v-row>
    </v-container>

    
    
</template>

<style scoped>
.subheading{
    color:#1e2242;
    margin-top: 20px;
    font-weight: 500;

}

.pa-3 {
    border-radius: 20px;
    box-shadow: none;
}

</style>