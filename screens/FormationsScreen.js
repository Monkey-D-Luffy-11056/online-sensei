"use client"

import { useState } from "react"
import { ScrollView, View, Text, TouchableOpacity, Image, StyleSheet, SafeAreaView } from "react-native"
import { Ionicons } from "@expo/vector-icons"

const categoriesFormations = ["Tous", "Marketing", "Business", "Crypto", "Développement", "Design"]

const formations = [
  {
    id: 1,
    titre: "Maîtriser le Marketing Digital en 2024",
    instructeur: "Marie Expert",
    categorie: "Marketing",
    niveau: "Débutant",
    duree: "8h 30min",
    lecons: 24,
    prix: "Gratuit",
    note: 4.8,
    etudiants: 1250,
    image: "https://picsum.photos/250/150?random=7",
    description: "Apprenez les fondamentaux du marketing digital moderne...",
    tags: ["SEO", "Social Media", "Email Marketing"],
  },
  {
    id: 2,
    titre: "Créer une Startup Rentable",
    instructeur: "Paul Entrepreneur",
    categorie: "Business",
    niveau: "Intermédiaire",
    duree: "12h 15min",
    lecons: 36,
    prix: "99€",
    note: 4.9,
    etudiants: 890,
    image: "https://picsum.photos/250/150?random=8",
    description: "De l'idée au lancement, tous les secrets pour réussir...",
    tags: ["Lean Startup", "MVP", "Fundraising"],
  },
  {
    id: 3,
    titre: "Trading Crypto pour Débutants",
    instructeur: "Alex Trader",
    categorie: "Crypto",
    niveau: "Débutant",
    duree: "6h 45min",
    lecons: 18,
    prix: "149€",
    note: 4.6,
    etudiants: 2100,
    image: "https://picsum.photos/250/150?random=9",
    description: "Apprenez à trader les cryptomonnaies en toute sécurité...",
    tags: ["Bitcoin", "Ethereum", "Analysis"],
  },
  {
    id: 4,
    titre: "React Native: Apps Mobiles Complètes",
    instructeur: "Dev Master",
    categorie: "Développement",
    niveau: "Avancé",
    duree: "20h 30min",
    lecons: 45,
    prix: "199€",
    note: 4.9,
    etudiants: 650,
    image: "https://picsum.photos/250/150?random=10",
    description: "Créez des applications mobiles professionnelles...",
    tags: ["React Native", "TypeScript", "Redux"],
  },
]

export default function FormationsScreen() {
  const [selectedCategory, setSelectedCategory] = useState("Tous")
  const [showFreeOnly, setShowFreeOnly] = useState(false)

  const filteredCourses = formations.filter((course) => {
    const matchesCategory = selectedCategory === "Tous" || course.categorie === selectedCategory
    const matchesPrice = !showFreeOnly || course.prix === "Gratuit"
    return matchesCategory && matchesPrice
  })

  return (
    <SafeAreaView style={styles.container}>
      {/* En-tête */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Formations</Text>
        <TouchableOpacity>
          <Ionicons name="person-circle-outline" size={28} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Statistiques */}
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>28</Text>
          <Text style={styles.statLabel}>Formations</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>12</Text>
          <Text style={styles.statLabel}>Gratuites</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>5.2k</Text>
          <Text style={styles.statLabel}>Étudiants</Text>
        </View>
      </View>

      {/* Filtres */}
      <View style={styles.filtersContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesScroll}>
          {categoriesFormations.map((category) => (
            <TouchableOpacity
              key={category}
              style={[styles.categoryButton, selectedCategory === category && styles.categoryButtonActive]}
              onPress={() => setSelectedCategory(category)}
            >
              <Text
                style={[styles.categoryButtonText, selectedCategory === category && styles.categoryButtonTextActive]}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <TouchableOpacity
          style={[styles.freeFilter, showFreeOnly && styles.freeFilterActive]}
          onPress={() => setShowFreeOnly(!showFreeOnly)}
        >
          <Ionicons
            name={showFreeOnly ? "checkbox" : "square-outline"}
            size={20}
            color={showFreeOnly ? "#667eea" : "#666"}
          />
          <Text style={[styles.freeFilterText, showFreeOnly && styles.freeFilterTextActive]}>Gratuit uniquement</Text>
        </TouchableOpacity>
      </View>

      {/* Liste des formations */}
      <ScrollView style={styles.coursesContainer} showsVerticalScrollIndicator={false}>
        {filteredCourses.map((course) => (
          <TouchableOpacity key={course.id} style={styles.courseCard}>
            <Image source={{ uri: course.image }} style={styles.courseImage} />
            <View style={styles.courseContent}>
              <View style={styles.courseHeader}>
                <Text style={styles.courseCategory}>{course.categorie}</Text>
                <Text style={styles.courseLevel}>{course.niveau}</Text>
              </View>

              <Text style={styles.courseTitle}>{course.titre}</Text>
              <Text style={styles.courseInstructor}>Par {course.instructeur}</Text>
              <Text style={styles.courseDescription}>{course.description}</Text>

              <View style={styles.courseTags}>
                {course.tags.map((tag, index) => (
                  <View key={index} style={styles.tag}>
                    <Text style={styles.tagText}>{tag}</Text>
                  </View>
                ))}
              </View>

              <View style={styles.courseStats}>
                <View style={styles.statRow}>
                  <Ionicons name="time-outline" size={16} color="#666" />
                  <Text style={styles.statText}>{course.duree}</Text>
                </View>
                <View style={styles.statRow}>
                  <Ionicons name="play-circle-outline" size={16} color="#666" />
                  <Text style={styles.statText}>{course.lecons} leçons</Text>
                </View>
                <View style={styles.statRow}>
                  <Ionicons name="people-outline" size={16} color="#666" />
                  <Text style={styles.statText}>{course.etudiants} étudiants</Text>
                </View>
              </View>

              <View style={styles.courseFooter}>
                <View style={styles.ratingContainer}>
                  <Ionicons name="star" size={16} color="#FFD700" />
                  <Text style={styles.rating}>{course.note}</Text>
                </View>
                <View style={styles.priceContainer}>
                  <Text style={[styles.price, course.prix === "Gratuit" && styles.freePrice]}>{course.prix}</Text>
                  <TouchableOpacity style={styles.enrollButton}>
                    <Text style={styles.enrollButtonText}>
                      {course.prix === "Gratuit" ? "Commencer" : "S'inscrire"}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#fff",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 20,
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginTop: 10,
    borderRadius: 15,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  statItem: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  statLabel: {
    fontSize: 12,
    color: "#666",
    marginTop: 2,
  },
  filtersContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  categoriesScroll: {
    marginBottom: 15,
  },
  categoryButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#e9ecef",
    marginRight: 10,
  },
  categoryButtonActive: {
    backgroundColor: "#667eea",
  },
  categoryButtonText: {
    fontSize: 14,
    color: "#666",
    fontWeight: "500",
  },
  categoryButtonTextActive: {
    color: "#fff",
  },
  freeFilter: {
    flexDirection: "row",
    alignItems: "center",
  },
  freeFilterActive: {},
  freeFilterText: {
    fontSize: 14,
    color: "#666",
    marginLeft: 8,
  },
  freeFilterTextActive: {
    color: "#667eea",
    fontWeight: "600",
  },
  coursesContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  courseCard: {
    backgroundColor: "#fff",
    borderRadius: 15,
    marginBottom: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  courseImage: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  courseContent: {
    padding: 20,
  },
  courseHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  courseCategory: {
    fontSize: 12,
    color: "#667eea",
    fontWeight: "600",
  },
  courseLevel: {
    fontSize: 12,
    color: "#28a745",
    fontWeight: "600",
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
    lineHeight: 24,
  },
  courseInstructor: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },
  courseDescription: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
    marginBottom: 12,
  },
  courseTags: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 15,
  },
  tag: {
    backgroundColor: "#f8f9fa",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
    marginRight: 6,
    marginBottom: 4,
  },
  tagText: {
    fontSize: 11,
    color: "#333",
    fontWeight: "500",
  },
  courseStats: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  statRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  statText: {
    fontSize: 12,
    color: "#666",
    marginLeft: 4,
  },
  courseFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginLeft: 4,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginRight: 15,
  },
  freePrice: {
    color: "#28a745",
  },
  enrollButton: {
    backgroundColor: "#667eea",
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  enrollButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
})
