 /**
   * @TODO
   * lengkapi fungsi ini agar dapat menambahkan objek employee baru
   * berdasarkan nilai argumen fungsi dan simpan ke dalam array `employees`
   */

 const employees = [
    {
      name: 'Fulan',
      email: 'fulan@dicoding.com',
      joinYear: 2020,
    },
  ];
  
  function addEmployee(name, email, joinYear) {
    const newEmployee = {
      name: name,
      email: email,
      joinYear: joinYear
    }
    employees.push(newEmployee);
  }
  
  addEmployee("Alan", "alan@gmail.com", 2021);
  addEmployee("John", "john@gmail.com", 2021);
  
  console.log(employees);
  