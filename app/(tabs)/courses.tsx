"use client"

import { useState } from "react"
import { ScrollView, View, Text, TouchableOpacity, Image, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Ionicons } from "@expo/vector-icons"

const courseCategories = ["Tous", "Marketing", "Business", "Crypto", "Développement", "Design"]

const courses = [
  {
    id: 1,
    title: "Maîtriser le Marketing Digital en 2024",
    instructor: "Marie Expert",
    category: "Marketing",
    level: "Débutant",
    duration: "8h 30min",
    lessons: 24,
    price: "Gratuit",
    rating: 4.8,
    students: 1250,
    image: "/placeholder.svg?height=150&width=250",
    description: "Apprenez les fondamentaux du marketing digital moderne...",
    tags: ["SEO", "Social Media", "Email Marketing"],
  },
  {
    id: 2,
    title: "Créer une Startup Rentable",
    instructor: "Paul Entrepreneur",
    category: "Business",
    level: "Intermédiaire",
    duration: "12h 15min",
    lessons: 36,
    price: "99€",
    rating: 4.9,
    students: 890,
    image: "/placeholder.svg?height=150&width=250",
    description: "De l'idée au lancement, tous les secrets pour réussir...",
    tags: ["Lean Startup", "MVP", "Fundraising"],
  },
  {
    id: 3,
    title: "Trading Crypto pour Débutants",
    instructor: "Alex Trader",
    category: "Crypto",
    level: "Débutant",
    duration: "6h 45min",
    lessons: 18,
    price: "149€",
    rating: 4.6,
    students: 2100,
    image: "/placeholder.svg?height=150&width=250",
    description: "Apprenez à trader les cryptomonnaies en toute sécurité...",
    tags: ["Bitcoin", "Ethereum", "Analysis"],
  },
  {
    id: 4,
    title: "React Native: Apps Mobiles Complètes",
    instructor: "Dev Master",
    category: "Développement",
    level: "Avancé",
    duration: "20h 30min",
    lessons: 45,
    price: "199€",
    rating: 4.9,
    students: 650,
    image: "/placeholder.svg?height=150&width=250",
    description: "Créez des applications mobiles professionnelles...",
    tags: ["React Native", "TypeScript", "Redux"],
  },
]

export default function CoursesScreen() {
  const [selectedCategory, setSelectedCategory] = useState("Tous")
  const [showFreeOnly, setShowFreeOnly] = useState(false)

  const filteredCourses = courses.filter((course) => {
    const matchesCategory = selectedCategory === "Tous" || course.category === selectedCategory
    const matchesPrice = !showFreeOnly || course.price === "Gratuit"
    return matchesCategory && matchesPrice
  })

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Formations</Text>
        <TouchableOpacity>
          <Ionicons name="person-circle-outline" size={28} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Stats */}
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

      {/* Filters */}
      <View style={styles.filtersContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesScroll}>
          {courseCategories.map((category) => (
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

      {/* Courses List */}
      <ScrollView style={styles.coursesContainer} showsVerticalScrollIndicator={false}>
        {filteredCourses.map((course) => (
          <TouchableOpacity key={course.id} style={styles.courseCard}>
            <Image source={{ uri: course.image }} style={styles.courseImage} />
            <View style={styles.courseContent}>
              <View style={styles.courseHeader}>
                <Text style={styles.courseCategory}>{course.category}</Text>
                <Text style={styles.courseLevel}>{course.level}</Text>
              </View>

              <Text style={styles.courseTitle}>{course.title}</Text>
              <Text style={styles.courseInstructor}>Par {course.instructor}</Text>
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
                  <Text style={styles.statText}>{course.duration}</Text>
                </View>
                <View style={styles.statRow}>
                  <Ionicons name="play-circle-outline" size={16} color="#666" />
                  <Text style={styles.statText}>{course.lessons} leçons</Text>
                </View>
                <View style={styles.statRow}>
                  <Ionicons name="people-outline" size={16} color="#666" />
                  <Text style={styles.statText}>{course.students} étudiants</Text>
                </View>
              </View>

              <View style={styles.courseFooter}>
                <View style={styles.ratingContainer}>
                  <Ionicons name="star" size={16} color="#FFD700" />
                  <Text style={styles.rating}>{course.rating}</Text>
                </View>
                <View style={styles.priceContainer}>
                  <Text style={[styles.price, course.price === "Gratuit" && styles.freePrice]}>{course.price}</Text>
                  <TouchableOpacity style={styles.enrollButton}>
                    <Text style={styles.enrollButtonText}>
                      {course.price === "Gratuit" ? "Commencer" : "S'inscrire"}
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
  freeFilterActive: {
    // Active state handled by icon and text color
  },
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
