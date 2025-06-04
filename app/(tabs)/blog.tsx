"use client"

import { useState } from "react"
import { ScrollView, View, Text, TouchableOpacity, Image, StyleSheet, TextInput } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Ionicons } from "@expo/vector-icons"

const categories = ["Tous", "🚀Marketing", "💻Business", "💱Crypto", "👨‍💻DEV", "🤡Tricks"]

const articles = [
  {
    id: 1,
    title: "Comment générer 10k€/mois avec l'affiliation",
    category: "🚀Marketing",
    excerpt: "Découvrez les stratégies secrètes des top affiliés pour maximiser vos revenus...",
    image: "/placeholder.svg?height=150&width=250",
    author: "Sophie Laurent",
    date: "2024-01-15",
    readTime: "7 min",
    likes: 142,
    comments: 23,
  },
  {
    id: 2,
    title: "Créer une SaaS rentable en 2024",
    category: "💻Business",
    excerpt: "Guide complet pour lancer votre Software as a Service et atteindre la rentabilité...",
    image: "/placeholder.svg?height=150&width=250",
    author: "Marc Dubois",
    date: "2024-01-12",
    readTime: "12 min",
    likes: 89,
    comments: 15,
  },
  {
    id: 3,
    title: "Bitcoin vs Ethereum: Analyse 2024",
    category: "💱Crypto",
    excerpt: "Comparaison détaillée des deux cryptomonnaies les plus populaires...",
    image: "/placeholder.svg?height=150&width=250",
    author: "Alex Crypto",
    date: "2024-01-10",
    readTime: "9 min",
    likes: 234,
    comments: 67,
  },
  {
    id: 4,
    title: "React Native vs Flutter en 2024",
    category: "👨‍💻DEV",
    excerpt: "Quel framework choisir pour votre prochaine application mobile...",
    image: "/placeholder.svg?height=150&width=250",
    author: "Dev Master",
    date: "2024-01-08",
    readTime: "15 min",
    likes: 156,
    comments: 34,
  },
]

export default function BlogScreen() {
  const [selectedCategory, setSelectedCategory] = useState("Tous")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredArticles = articles.filter((article) => {
    const matchesCategory = selectedCategory === "Tous" || article.category === selectedCategory
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Blog</Text>
        <TouchableOpacity>
          <Ionicons name="bookmark-outline" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#666" />
        <TextInput
          style={styles.searchInput}
          placeholder="Rechercher un article..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Categories */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[styles.categoryButton, selectedCategory === category && styles.categoryButtonActive]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text style={[styles.categoryButtonText, selectedCategory === category && styles.categoryButtonTextActive]}>
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Articles List */}
      <ScrollView style={styles.articlesContainer} showsVerticalScrollIndicator={false}>
        {filteredArticles.map((article) => (
          <TouchableOpacity key={article.id} style={styles.articleCard}>
            <Image source={{ uri: article.image }} style={styles.articleImage} />
            <View style={styles.articleContent}>
              <View style={styles.articleHeader}>
                <Text style={styles.articleCategory}>{article.category}</Text>
                <Text style={styles.articleDate}>{article.date}</Text>
              </View>
              <Text style={styles.articleTitle}>{article.title}</Text>
              <Text style={styles.articleExcerpt}>{article.excerpt}</Text>
              <View style={styles.articleFooter}>
                <View style={styles.authorInfo}>
                  <Text style={styles.authorName}>Par {article.author}</Text>
                  <Text style={styles.readTime}>{article.readTime}</Text>
                </View>
                <View style={styles.articleStats}>
                  <View style={styles.statItem}>
                    <Ionicons name="heart-outline" size={16} color="#666" />
                    <Text style={styles.statText}>{article.likes}</Text>
                  </View>
                  <View style={styles.statItem}>
                    <Ionicons name="chatbubble-outline" size={16} color="#666" />
                    <Text style={styles.statText}>{article.comments}</Text>
                  </View>
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
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginVertical: 15,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 25,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: "#333",
  },
  categoriesContainer: {
    paddingHorizontal: 20,
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
  articlesContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  articleCard: {
    backgroundColor: "#fff",
    borderRadius: 15,
    marginBottom: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  articleImage: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  articleContent: {
    padding: 15,
  },
  articleHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  articleCategory: {
    fontSize: 12,
    color: "#667eea",
    fontWeight: "600",
  },
  articleDate: {
    fontSize: 12,
    color: "#999",
  },
  articleTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
    lineHeight: 24,
  },
  articleExcerpt: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
    marginBottom: 15,
  },
  articleFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  authorInfo: {
    flex: 1,
  },
  authorName: {
    fontSize: 12,
    color: "#333",
    fontWeight: "500",
  },
  readTime: {
    fontSize: 12,
    color: "#999",
    marginTop: 2,
  },
  articleStats: {
    flexDirection: "row",
    alignItems: "center",
  },
  statItem: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 15,
  },
  statText: {
    fontSize: 12,
    color: "#666",
    marginLeft: 4,
  },
})
