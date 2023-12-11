<!-- import {ref} from 'vue'; -->

<script setup>
import useDate from './composables/useDate.js';
import {ref, reactive} from 'vue';

const {date, getDay, getMonth, addDay, addMonth} = useDate();
const addedDay= ref(null);
  const addedMonth = ref(null);
  const numberOfDays = ref(null);
  const numberOfMonths = ref(null);


const handleAddDay = ()=>{
  const result = addDay(numberOfDays.value);
  addedDay.value = result;
}

const handleAddMonth = ()=>{
  const result = addMonth(numberOfMonths.value);
  addedMonth.value = result;
}
</script>

<template>
<div class="wrapper">

 <div>
   Date: {{ date }}
 </div>
<div>
   Day of the month: {{ getDay}}th 
</div>
<div>
  Month of the year: {{ getMonth() }}
</div>

<div class="day-wrapper">
<label for="daysInput">Add Days: </label>
<input type="number" v-model="numberOfDays">
 <button @click="handleAddDay">Add Days</button>
   <div>Added Day(s): {{ addedDay ? addedDay.toString(): 'Day not added' }}</div>
</div>

<div class="month-wrapper">
  <label for="monthsInput">Add Months: </label>
  <input type="number" v-model="numberOfMonths">
  <button @click="handleAddMonth">Add  Months</button>
  <div>Added Month(s): {{addedMonth ? addedMonth.toString(): 'Month not added' }}</div>

</div>
</div>
</template>

<style>
.wrapper{
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  font-size: 20px;
  font-weight: 400;
  
}
.day-wrapper{

}
</style>

