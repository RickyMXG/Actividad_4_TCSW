export async function GET(request) {
  const autos = [
    { id: 1, marca: "Mazda",  modelo: "MX-5",     anio: 2021, precio: 400900, color: "Rojo" },
    { id: 2, marca: "Toyota", modelo: "Corolla",  anio: 2020, precio: 325000, color: "Blanco" },
    { id: 3, marca: "Honda",  modelo: "Civic",    anio: 2022, precio: 455000, color: "Negro" },
    { id: 4, marca: "Nissan", modelo: "Sentra",   anio: 2019, precio: 280000, color: "Gris" },
    { id: 5, marca: "VW",     modelo: "Jetta",    anio: 2023, precio: 510000, color: "Azul" }
  ];

  const { searchParams } = new URL(request.url);
  const marca = searchParams.get("marca");
  const anio = searchParams.get("anio");
  const color = searchParams.get("color");

  let resultado = autos;
  if (marca) resultado = resultado.filter(a => a.marca.toLowerCase() === marca.toLowerCase());
  if (anio) resultado = resultado.filter(a => a.anio === Number(anio));
  if (color) resultado = resultado.filter(a => a.color.toLowerCase() === color.toLowerCase());

  return new Response(JSON.stringify({ total: resultado.length, datos: resultado }), {
    headers: { "Content-Type": "application/json" }
  });
}
