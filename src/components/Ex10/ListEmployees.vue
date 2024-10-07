<template>
    <v-container>
      <v-row>
        <v-col v-for="employee in employees" :key="employee.id" cols="12" md="4">
          <v-card>
            <v-card-title>{{ employee.name }}</v-card-title>
            <v-card-subtitle>Vị trí: {{ employee.position }}</v-card-subtitle>
            <v-card-actions>
              <v-btn color="primary" @click="viewDetails(employee.id)">Xem chi tiết</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  
  const employees = [
    { id: 1, name: 'Nguyễn Văn A', position: 'Giám Đốc' },
    { id: 2, name: 'Nguyễn Văn B', position: 'Trưởng Phòng' },
    { id: 3, name: 'Nguyễn Văn C', position: 'Nhân Viên' }
  ]
  
  const viewDetails = (id) => {
    router.push({ name: 'EmployeeDetail', params: { id } })
  }
  </script>
  
  <style scoped>
  .v-card {
    margin-bottom: 20px;
  }
  </style>
  