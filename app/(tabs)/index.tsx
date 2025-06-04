import { ScrollView, View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { LinearGradient } from "expo-linear-gradient"
import { Ionicons } from "@expo/vector-icons"

const { width } = Dimensions.get("window")

const categories = [
  { id: 1, title: "🚀Marketing", color: "#FF6B6B", articles: 24 },
  { id: 2, title: "💻Business en ligne", color: "#4ECDC4", articles: 18 },
  { id: 3, title: "💱Investissement Crypto", color: "#45B7D1", articles: 32 },
  { id: 4, title: "👨‍💻DEV App/Web", color: "#96CEB4", articles: 41 },
  { id: 5, title: "🤡Tricks & 🤓Geek", color: "#FFEAA7", articles: 27 },
]

const featuredArticles = [
  {
    id: 1,
    title: "Les 10 stratégies marketing qui génèrent des millions",
    category: "🚀Marketing",
    readTime: "8 min",
    image: "/placeholder.svg?height=200&width=300",
    author: "Marie Dubois",
  },
  {
    id: 2,
    title: "Comment créer une app rentable en 30 jours",
    category: "👨‍💻DEV App/Web",
    readTime: "12 min",
    image: "/placeholder.svg?height=200&width=300",
    author: "Alex Martin",
  },
]

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <LinearGradient colors={["#667eea", "#764ba2"]} style={styles.header}>
          <View style={styles.headerContent}>
            <Text style={styles.headerTitle}>Online Sensei</Text>
            <Text style={styles.headerSubtitle}>💸POTENTIEL INFINI DU WEB💻</Text>
            <TouchableOpacity style={styles.searchButton}>
              <Ionicons name="search" size={20} color="#fff" />
              <Text style={styles.searchText}>Rechercher...</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>

        {/* Quick Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>142</Text>
            <Text style={styles.statLabel}>Articles</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>28</Text>
            <Text style={styles.statLabel}>Formations</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>156</Text>
            <Text style={styles.statLabel}>Offres d'emploi</Text>
          </View>
        </View>

        {/* Categories */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Catégories</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesScroll}>
            {categories.map((category) => (
              <TouchableOpacity key={category.id} style={[styles.categoryCard, { backgroundColor: category.color }]}>
                <Text style={styles.categoryTitle}>{category.title}</Text>
                <Text style={styles.categoryCount}>{category.articles} articles</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Featured Articles */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Articles à la une</Text>
          {featuredArticles.map((article) => (
            <TouchableOpacity key={article.id} style={styles.articleCard}>
              <Image source={{ uri: article.image }} style={styles.articleImage} />
              <View style={styles.articleContent}>
                <Text style={styles.articleCategory}>{article.category}</Text>
                <Text style={styles.articleTitle}>{article.title}</Text>
                <View style={styles.articleMeta}>
                  <Text style={styles.articleAuthor}>Par {article.author}</Text>
                  <Text style={styles.articleReadTime}>{article.readTime}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Actions rapides</Text>
          <View style={styles.quickActions}>
            <TouchableOpacity style={styles.actionButton}>
              <Ionicons name="briefcase" size={24} color="#667eea" />
              <Text style={styles.actionText}>Emplois</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Ionicons name="school" size={24} color="#667eea" />
              <Text style={styles.actionText}>Formations</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Ionicons name="chatbubbles" size={24} color="#667eea" />
              <Text style={styles.actionText}>Communauté</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Ionicons name="bookmark" size={24} color="#667eea" />
              <Text style={styles.actionText}>Favoris</Text>
            </TouchableOpacity>
          </View>
        </View>
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
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  headerContent: {
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: "#fff",
    opacity: 0.9,
    marginBottom: 20,
  },
  searchButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.2)",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 25,
    width: width - 40,
  },
  searchText: {
    color: "#fff",
    marginLeft: 10,
    opacity: 0.8,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 20,
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginTop: -15,
    borderRadius: 15,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  statItem: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  statLabel: {
    fontSize: 12,
    color: "#666",
    marginTop: 2,
  },
  section: {
    paddingHorizontal: 20,
    marginTop: 25,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
  },
  categoriesScroll: {
    marginHorizontal: -20,
    paddingHorizontal: 20,
  },
  categoryCard: {
    width: 140,
    height: 80,
    borderRadius: 15,
    padding: 15,
    marginRight: 15,
    justifyContent: "center",
  },
  categoryTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
  },
  categoryCount: {
    fontSize: 12,
    color: "#fff",
    opacity: 0.9,
  },
  articleCard: {
    backgroundColor: "#fff",
    borderRadius: 15,
    marginBottom: 15,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
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
  articleCategory: {
    fontSize: 12,
    color: "#667eea",
    fontWeight: "600",
    marginBottom: 5,
  },
  articleTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
    lineHeight: 22,
  },
  articleMeta: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  articleAuthor: {
    fontSize: 12,
    color: "#666",
  },
  articleReadTime: {
    fontSize: 12,
    color: "#666",
  },
  quickActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  actionButton: {
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 15,
    width: (width - 60) / 4,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  actionText: {
    fontSize: 12,
    color: "#333",
    marginTop: 8,
    textAlign: "center",
  },
})
