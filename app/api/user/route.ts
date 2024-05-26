// import prisma from "@/lib/prisma";
// import { NextResponse } from "next/server";

// export async function POST(request) {
//   try {
//     const data = await request.json();
//             // el user es el nombre de la tabla en la base de datos
//     const result = await prisma.user.create({
//       data: data,
//     });
//     return new NextResponse(JSON.stringify(result), {
//       headers: { "Content-Type": "application/json" },
//       status: 201,
//     });
//   } catch (error) {
//     return new NextResponse(error.message, { status: 500 });
//   }
// }

// export async function GET() {
//   try {
//             // el user es el nombre de la tabla en la base de datos
//     const result = await prisma.user.findMany();
//     return NextResponse.json({ data: result }, { status: 200 });
//   } catch (error) {
//     return new NextResponse(error.message, { status: 500 });
//   }
// }
"use server";
import prisma from "@/lib/prisma";

export const createUser = async (formData: FormData) => {
  // "use server" esto establece que la funcion se ejecute desde el servidor y no desde el cliente

  // aqui se empieza a traer los valores del formulario con el atributo name de cada uno de los elementos, ya sean labels, botones etc
  const username = (await formData.get("UserName")) as string;
  const email = (await formData.get("Email")) as string;
  const psswrd = (await formData.get("PassWord")) as string;
  const Conpsswrd = (await formData.get("ConfPass")) as string;

  if (!username || !email || !psswrd || !Conpsswrd) {
    return {
      error: "Todos los campos son obligatorios.",
    };
  }

  if (psswrd !== Conpsswrd) {
    return {
      error: "Las contraseñas no coinciden.",
    };
  }

  // Validar la contraseña
  const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()\-+¿?])(?=.*[0-9])(?=.{8,})/;
  if (!passwordRegex.test(psswrd)) {
    return {
      error: "La contraseña debe tener al menos 8 caracteres, un carácter especial, un número y una letra mayúscula.",
    };
  }




  try {
    const crearUser = await prisma.user.create({
      data: {
        userName: username,
        email: email,
        password: psswrd,
      },
    });

    return {
      message: "Usuario creado correctamente",
    };
  } catch (error) {
    return {
      error: "ERROR: El correo ya se encuentra registrado.",
    };
  }
};
