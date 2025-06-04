"use client"

import { useState } from "react"
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Ionicons } from "@expo/vector-icons"

const jobTypes = ["Tous", "Temps plein", "Freelance", "Stage", "Contrat"]
const locations = ["Tous", "Remote", "France", "Europe", "International"]

const jobs = [
  {
    id: 1,
    title: "Développeur React Native Senior",
    company: "TechStart",
    location: "Remote",
    type: "Temps plein",
    salary: "50k-70k €",
    description: "Nous recherchons un développeur React Native expérimenté pour rejoindre notre équipe...",
    tags: ["React Native", "TypeScript", "Redux"],
    posted: "2 jours",
    applicants: 23,
  },
  {
    id: 2,
    title: "Expert Marketing Digital",
    company: "GrowthCorp",
    location: "Paris, France",
    type: "Freelance",
    salary: "400-600 €/jour",
    description: "Mission de 6 mois pour optimiser nos campagnes publicitaires et augmenter notre ROI...",
    tags: ["SEO", "Google Ads", "Analytics"],
    posted: "1 semaine",
    applicants: 45,
  },
  {
    id: 3,
    title: "Analyste Crypto & Blockchain",
    company: "CryptoFund",
    location: "Remote",
    type: "Temps plein",
    salary: "40k-60k €",
    description: "Rejoignez notre équipe d'analyse pour évaluer les projets blockchain émergents...",
    tags: ["Blockchain", "DeFi", "Trading"],
    posted: "3 jours",
    applicants: 67,
  },
  {
    id: 4,
    title: "Stagiaire Développement Web",
    company: "WebAgency",
    location: "Lyon, France",
    type: "Stage",
    salary: "600 €/mois",
    description: "Stage de 6 mois dans une agence web dynamique. Formation complète aux technologies modernes...",
    tags: ["HTML/CSS", "JavaScript", "PHP"],
    posted: "5 jours",
    applicants: 12,
  },
]

export default function JobsScreen() {
  const [selectedType, setSelectedType] = useState("Tous")
  const [selectedLocation, setSelectedLocation] = useState("Tous")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredJobs = jobs.filter((job) => {
    const matchesType = selectedType === "Tous" || job.type === selectedType
    const matchesLocation = selectedLocation === "Tous" || job.location.includes(selectedLocation)
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesType && matchesLocation && matchesSearch
  })

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Emplois</Text>
        <TouchableOpacity>
          <Ionicons name="filter" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#666" />
        <TextInput
          style={styles.searchInput}
          placeholder="Rechercher un emploi..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Filters */}
      <View style={styles.filtersContainer}>
        <Text style={styles.filterLabel}>Type:</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterScroll}>
          {jobTypes.map((type) => (
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
          {locations.map((location) => (
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

      {/* Jobs List */}
      <ScrollView style={styles.jobsContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.resultsHeader}>
          <Text style={styles.resultsText}>{filteredJobs.length} offres trouvées</Text>
        </View>

        {filteredJobs.map((job) => (
          <TouchableOpacity key={job.id} style={styles.jobCard}>
            <View style={styles.jobHeader}>
              <View style={styles.jobTitleContainer}>
                <Text style={styles.jobTitle}>{job.title}</Text>
                <Text style={styles.jobCompany}>{job.company}</Text>
              </View>
              <TouchableOpacity style={styles.bookmarkButton}>
                <Ionicons name="bookmark-outline" size={20} color="#666" />
              </TouchableOpacity>
            </View>

            <View style={styles.jobDetails}>
              <View style={styles.jobDetailItem}>
                <Ionicons name="location-outline" size={16} color="#666" />
                <Text style={styles.jobDetailText}>{job.location}</Text>
              </View>
              <View style={styles.jobDetailItem}>
                <Ionicons name="time-outline" size={16} color="#666" />
                <Text style={styles.jobDetailText}>{job.type}</Text>
              </View>
              <View style={styles.jobDetailItem}>
                <Ionicons name="card-outline" size={16} color="#666" />
                <Text style={styles.jobDetailText}>{job.salary}</Text>
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
                <Text style={styles.jobPosted}>Publié il y a {job.posted}</Text>
                <Text style={styles.jobApplicants}>{job.applicants} candidatures</Text>
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
