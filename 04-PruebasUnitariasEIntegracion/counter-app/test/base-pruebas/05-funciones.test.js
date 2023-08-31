import { getUser, getUsuarioActivo } from "../../src/base/05-funciones";

describe("Prueba en 05-funciones", () => {
  // test("getUser debe retornar un objeto", () => {

  //   const testUser = {
  //     uid: "ABC123",
  //     username: "El_papi250",
  //   };

  //   const user = getUser();

  //   expect(testUser).toEqual(user);
  // });

  test("getUsuarioActivo debe retornar un objeto", () => {
    
    const name = "Fernando";

    const user = getUsuarioActivo(name);

    expect(user).toStrictEqual({
      uid: "ABC567",
      username: name,
    });
  });
});
