package com.example.app_mobile_vente_achat_android.ApiService

import retrofit2.Call
import retrofit2.http.GET
import retrofit2.http.POST
import retrofit2.http.Body

// Modèle pour les utilisateurs
data class User(val name: String, val email: String, val password: String, val role: String, val adress: String)

// Modèle pour les pièces auto
data class AutoPart(val name: String, val brand: String, val carModel: String, val price: Double, val condition: String)

interface ApiService {

    // Récupérer tous les utilisateurs
    @GET("/users")
    fun getAllUsers(): Call<List<User>>

    // Ajouter un utilisateur
    @POST("/users")
    fun addUser(@Body user: User): Call<User>

    // Récupérer toutes les pièces auto
    @GET("/parts")
    fun getAllParts(): Call<List<AutoPart>>

    // Ajouter une pièce auto
    @POST("/parts")
    fun addAutoPart(@Body autoPart: AutoPart): Call<AutoPart>
}

