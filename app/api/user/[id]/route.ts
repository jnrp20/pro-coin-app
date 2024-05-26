// import prisma from "@/lib/prisma";
// import { NextResponse } from "next/server";

// // estos metodos solo traaen f=valores especificos, por eso se usan los atributos request y params

// export async function GET(request, { params }) {
//   // convertimos el params.i en int porque asi aparece declarado en la tabla, si no se hace eso da error
//   const id = parseInt(params.id);

//   try {
//     // el user es el nombre de la tabla en la base de datos
//     const result = await prisma.user.findFirst({
//       where: { id: id },
//     });
//     if (!result) {
//       // para cuando haya un ${variable} hay que poner todo en comilla invertida que se ubica en la tecla escy se saca con FN + ESC
//       return new NextResponse(`el usuario con id ${id} no fue encontrado`, {
//         status: 404,
//       });
//     }
//     // retorname una respuesta next en formato jason con los valores de result
//     return NextResponse.json(result);
//   } catch (error) {
//     return new NextResponse(error.message, { status: 500 });
//   }
// }


// export async function DELETE(request, { params }) {
//     const id = parseInt(params.id);
//     try {
//       const result = await prisma.user.delete({
//         where: { id: id },
//       });
//       return NextResponse.json(`el usuario con id ${id} fue eliminado satifactoriamente`,{ message: result }, { status: 200 });
//     } catch (error) {
//       return new NextResponse(error.message, { status: 500 });
//     }
//   }
  
//   export async function PUT(request, { params }) {
//     console.log(params);
//     const id = parseInt(params.id);
//     const data = await request.json();
//     try {
//       const result = await prisma.user.update({
//         where: { id: id },
//         data: data,
//       });
//       if (!result) {
//         return new NextResponse(`el usuario con id ${id} no fue encontrado`, {
//             status: 404,
//           });
//       }
//       return NextResponse.json({message:result}, {status:200})
//     } catch (error) {
//       return new NextResponse(error.message, {status:500})
//     }
//   }