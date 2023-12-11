import{ref, computed} from 'vue';
const useDate = ()=>{
  //the date
  const date = new Date();
//the day of the month
  const getDay = computed( ()=>{
    return date.getDate();
  });
//the month of the year
  const getMonth = ()=>{
    return date.getMonth() + 1;
  };

  //add day(s) to the present day
 const addDay = (numberOfDays) => {
  const newDate = new Date(date);
  const currentMonth = newDate.getMonth();
  newDate.setDate(date.getDate() + numberOfDays);

  // If the month after adding is greater than the current month, set the date to the last day of the current month
  if (newDate.getMonth() !== currentMonth) {
    newDate.setDate(0);
  }

  return newDate;
};

  const addMonth= (numberOfMonth)=>{
const newDate = new Date(date);
newDate.setMonth(date.getMonth() + numberOfMonth);
//if month after adding is greater than 11, date should be a new year
if (newDate.getMonth()>11){
  newDate.setFullYear(newDate.getFullYear() + 1);
  newDate.setMonth(0);
}
return newDate
  }
 
  return{date, getDay, getMonth, addDay, addMonth};
};
export default useDate;