export default function LinhasCardGrid() {
  const linhas = [
    { numero: "10", rota: "Moisés de Freitas x Cohab" },
    { numero: "12", rota: "Alvorada x Cristo Rei" },
    { numero: "14", rota: "Setor 13 x Cidade Verde" },
    { numero: "16", rota: "Vila Operária x Shopping Jardim" },
    { numero: "18", rota: "Barão 3 x Cidade Nova" },
    { numero: "20", rota: "Cidade Nova x Barão 3" },
    { numero: "22", rota: "Praças Vilhena x IFRO" },
    { numero: "40", rota: "Cohab x União" },
    { numero: "10i", rota: "Cohab x União" },
    { numero: "12i", rota: "Cristo Rei x Alvorada" },
  ];

  return (
    <div className="grid grid-cols-2 gap-x-2 gap-y-4 p-4 place-items-center">
      {linhas.map((linha, index) => (
        <div
          key={index}
          className="bg-blue-600 text-white rounded-2xl w-44 h-20 flex flex-col justify-center items-center text-center shadow-md"
        >
          <div className="text-lg font-bold">Linha {linha.numero}</div>
          <div className="text-sm">{linha.rota}</div>
        </div>
      ))}
    </div>
  );
}
