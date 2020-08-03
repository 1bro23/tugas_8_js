var objek={
  objek1:120,
  objek2:"Seratus Dua Puluh",
  objek3:"120"
};
function tampil()
{
  console.log(objek.objek1);
  console.log(objek.objek2);
  console.log(objek.objek3);
};
console.log("Nilai Awal :");
tampil();
objek.objek2="Dua Puluh Ribu Seratus";
console.log();
console.log("Setelah perubahan nilai");
tampil();
