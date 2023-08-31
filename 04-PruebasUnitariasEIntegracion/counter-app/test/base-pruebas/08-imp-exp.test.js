import { getHeroeById, getHeroesByOwner } from "../../src/base/08-imp-exp";

describe("Pruebas en 08-imp-exp", () => {

  test("getHeroById debe de retornar un heroe por ID", () => {
    const id = 1;
    const hero = getHeroeById(id);

    expect(hero).toEqual({id:1, name:'Batman', owner:'DC'})
  });

  test("getHeroById debe retornar undefined si no existe", () => {
    
    const id=100;
    const hero = getHeroeById(id)

    console.log(hero)

    expect(hero).toBe(undefined)
  })
  
  //Tarea
  // Debe de retornar un arreglo con los heroes de DC
  // length === 3
  // toEqual al arreglo filtrado

  // debe de retornar un arreglo con los heroes de Marvel
  // length ==2

  test('getHeroesByOwner debe regresar heroes de DC', () => {

    const owner = 'DC';
    const heroes = getHeroesByOwner(owner);

    expect(heroes.length).toBe(3);
    expect(heroes).toEqual([
      {id:1, name:"Batman", owner:'DC'},
      {id:3, name:"Superman", owner:'DC'},
      {id:4, name:"Flash", owner:'DC'},
    ])
    
    expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner === owner))
  })

  test("getHeroesByOwner debe de regresar heroes de Marvel", () => {

    const owner = 'Marvel'
    const heroes = getHeroesByOwner(owner)

    expect(heroes.length).toBe(2);
    expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner == owner))
  });
});
