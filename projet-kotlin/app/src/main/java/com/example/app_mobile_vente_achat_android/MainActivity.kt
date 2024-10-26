package com.example.app_mobile_vente_achat_android

import android.os.Bundle
import android.widget.Button
import android.widget.TextView
import androidx.activity.ComponentActivity
import com.example.app_mobile_vente_achat_android.ApiService.AutoPart
import com.example.app_mobile_vente_achat_android.ApiService.User
import com.example.app_mobile_vente_achat_android.RetrofitClient.RetrofitClient
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response

class MainActivity : ComponentActivity() {
    private lateinit var btnGetUsers: Button
    private lateinit var tvUsers: TextView
    private lateinit var btnGetParts: Button
    private lateinit var tvParts: TextView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        btnGetUsers = findViewById(R.id.btnGetUsers)
        tvUsers = findViewById(R.id.tvUsers)
        btnGetParts = findViewById(R.id.btnGetParts)
        tvParts = findViewById(R.id.tvParts)

        // Récupérer les utilisateurs quand on clique sur le bouton
        btnGetUsers.setOnClickListener {
            getUsers()
        }

        // Récupérer les pièces auto quand on clique sur le bouton
        btnGetParts.setOnClickListener {
            getAutoParts()
        }
    }

    // Fonction pour récupérer les utilisateurs
    private fun getUsers() {
        RetrofitClient.instance.getAllUsers().enqueue(object : Callback<List<User>> {
            override fun onResponse(call: Call<List<User>>, response: Response<List<User>>) {
                if (response.isSuccessful) {
                    val users = response.body() ?: emptyList()
                    tvUsers.text = users.joinToString { user -> "${user.name}, ${user.email}" }
                } else {
                    tvUsers.text = "Échec de la récupération des utilisateurs"
                }
            }

            override fun onFailure(call: Call<List<User>>, t: Throwable) {
                tvUsers.text = "Erreur lors de la récupération des utilisateurs"
            }
        })
    }

    // Fonction pour récupérer les pièces auto
    private fun getAutoParts() {
        RetrofitClient.instance.getAllParts().enqueue(object : Callback<List<AutoPart>> {
            override fun onResponse(call: Call<List<AutoPart>>, response: Response<List<AutoPart>>) {
                if (response.isSuccessful) {
                    val parts = response.body() ?: emptyList()
                    tvParts.text = parts.joinToString { part -> "${part.name}, ${part.carModel}, ${part.price}" }
                } else {
                    tvParts.text = "Échec de la récupération des pièces auto"
                }
            }

            override fun onFailure(call: Call<List<AutoPart>>, t: Throwable) {
                tvParts.text = "Erreur lors de la récupération des pièces auto"
            }
        })
    }
}
