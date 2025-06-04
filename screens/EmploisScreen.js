"use client"

import { useState } from "react"
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, TextInput, SafeAreaView } from "react-native"
import { Ionicons } from "@expo/vector-icons"

const typesEmploi = ["Tous", "Temps plein", "Freelance", "Stage", "Contrat"]
const localisations = ["Tous", "Remote", "France", "Europe", "International"]

const emplois = [
  {
    id: 1,
    titre: "Développeur React Native Senior",
    entreprise: "TechStart",
    localisation: "Remote",
    type: "Temps plein",
    salaire: "50k-70k €",
    description: "Nous recherchons un développeur React Native expérimenté pour rejoindre notre équipe...",
    tags: ["React Native", "TypeScript", "Redux"],
    publie: "2 jours",
    candidatures: 23,
  },
  {
    id: 2,
    titre: "Expert Marketing Digital",
    entreprise: "GrowthCorp",
    localisation: "Paris, France",
    type: "Freelance",
    salaire: "400-600 €/jour",
    description: "Mission de 6 mois pour optimiser nos campagnes publicitaires et augmenter notre ROI...",
    tags: ["SEO", "Google Ads", "Analytics"],
    publie: "1 semaine",
    candidatures: 45,
  },
  {
    id: 3,
    titre: "Analyste Crypto & Blockchain",
    entreprise: "CryptoFund",
    localisation: "Remote",
    type: "Temps plein",
    salaire: "40k-60k €",
    description: "Rejoignez notre équipe d'analyse pour évaluer les projets blockchain émergents...",
    tags: ["Blockchain", "DeFi", "Trading"],
    publie: "3 jours",
    candidatures: 67,
  },
  {
    id: 4,
    titre: "Stagiaire Développement Web",
    entreprise: "WebAgency",
    localisation: "Lyon, France",
    type: "Stage",
    salaire: "600 €/mois",
    description: "Stage de 6 mois dans une agence web dynamique. Formation complète aux technologies modernes...",
    tags: ["HTML/CSS", "JavaScript", "PHP"],
    publie: "5 jours",
    candidatures: 12,
  },
]

export default function EmploisScreen() {
  const [selectedType, setSelectedType] = useState("Tous")
  const [selectedLocation, setSelectedLocation] = useState("Tous")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredJobs = emplois.filter((job) => {
    const matchesType = selectedType === "Tous" || job.type === selectedType
    const matchesLocation = selectedLocation === "Tous" || job.localisation.includes(selectedLocation)
    const matchesSearch =
      job.titre.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.entreprise.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesType && matchesLocation && matchesSearch
  })

  return (
    <SafeAreaView style={styles.container}>
      {/* En-tête */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Emplois</Text>
        <TouchableOpacity>
          <Ionicons name="filter" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Barre de recherche */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#666" />
        <TextInput
          style={styles.searchInput}
          placeholder="Rechercher un emploi..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Filtres */}
      <View style={styles.filtersContainer}>
        <Text style={styles.filterLabel}>Type:</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterScroll}>
          {typesEmploi.map((type) => (
            <TouchableOpacity
              key={type}
              style={[styles.filterButton, selectedType === type && styles.filterButtonActive]}
              onPress={() => setSelectedType(type)}
            >
              <Text style={[styles.filterButtonText, selectedType === type && styles.filterButtonTextActive]}>
                {type}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.filtersContainer}>
        <Text style={styles.filterLabel}>Lieu:</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterScroll}>
          {localisations.map((location) => (
            <TouchableOpacity
              key={location}
              style={[styles.filterButton, selectedLocation === location && styles.filterButtonActive]}
              onPress={() => setSelectedLocation(location)}
            >
              <Text style={[styles.filterButtonText, selectedLocation === location && styles.filterButtonTextActive]}>
                {location}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Liste des emplois */}
      <ScrollView style={styles.jobsContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.resultsHeader}>
          <Text style={styles.resultsText}>{filteredJobs.length} offres trouvées</Text>
        </View>

        {filteredJobs.map((job) => (
          <TouchableOpacity key={job.id} style={styles.jobCard}>
            <View style={styles.jobHeader}>
              <View style={styles.jobTitleContainer}>
                <Text style={styles.jobTitle}>{job.titre}</Text>
                <Text style={styles.jobCompany}>{job.entreprise}</Text>
              </View>
              <TouchableOpacity style={styles.bookmarkButton}>
                <Ionicons name="bookmark-outline" size={20} color="#666" />
              </TouchableOpacity>
            </View>

            <View style={styles.jobDetails}>
              <View style={styles.jobDetailItem}>
                <Ionicons name="location-outline" size={16} color="#666" />
                <Text style={styles.jobDetailText}>{job.localisation}</Text>
              </View>
              <View style={styles.jobDetailItem}>
                <Ionicons name="time-outline" size={16} color="#666" />
                <Text style={styles.jobDetailText}>{job.type}</Text>
              </View>
              <View style={styles.jobDetailItem}>
                <Ionicons name="card-outline" size={16} color="#666" />
                <Text style={styles.jobDetailText}>{job.salaire}</Text>
              </View>
            </View>

            <Text style={styles.jobDescription}>{job.description}</Text>

            <View style={styles.jobTags}>
              {job.tags.map((tag, index) => (
                <View key={index} style={styles.tag}>
                  <Text style={styles.tagText}>{tag}</Text>
                </View>
              ))}
            </View>

            <View style={styles.jobFooter}>
              <View style={styles.jobMeta}>
                <Text style={styles.jobPosted}>Publié il y a {job.publie}</Text>
                <Text style={styles.jobApplicants}>{job.candidatures} candidatures</Text>
              </View>
              <TouchableOpacity style={styles.applyButton}>
                <Text style={styles.applyButtonText}>Postuler</Text>
              </TouchableOpacity>
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
  filtersContainer: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  filterLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  filterScroll: {
    marginHorizontal: -20,
    paddingHorizontal: 20,
  },
  filterButton: {
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 15,
    backgroundColor: "#e9ecef",
    marginRight: 8,
  },
  filterButtonActive: {
    backgroundColor: "#667eea",
  },
  filterButtonText: {
    fontSize: 12,
    color: "#666",
    fontWeight: "500",
  },
  filterButtonTextActive: {
    color: "#fff",
  },
  jobsContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  resultsHeader: {
    paddingVertical: 10,
  },
  resultsText: {
    fontSize: 14,
    color: "#666",
    fontWeight: "500",
  },
  jobCard: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  jobHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 12,
  },
  jobTitleContainer: {
    flex: 1,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  jobCompany: {
    fontSize: 14,
    color: "#667eea",
    fontWeight: "600",
  },
  bookmarkButton: {
    padding: 5,
  },
  jobDetails: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 12,
  },
  jobDetailItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
    marginBottom: 5,
  },
  jobDetailText: {
    fontSize: 12,
    color: "#666",
    marginLeft: 4,
  },
  jobDescription: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
    marginBottom: 15,
  },
  jobTags: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 15,
  },
  tag: {
    backgroundColor: "#f8f9fa",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 8,
    marginBottom: 5,
  },
  tagText: {
    fontSize: 12,
    color: "#333",
    fontWeight: "500",
  },
  jobFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  jobMeta: {
    flex: 1,
  },
  jobPosted: {
    fontSize: 12,
    color: "#999",
  },
  jobApplicants: {
    fontSize: 12,
    color: "#999",
    marginTop: 2,
  },
  applyButton: {
    backgroundColor: "#667eea",
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  applyButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
})
