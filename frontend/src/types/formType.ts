export type Section = "mainValues" | "secondaryValues";

export type Variavel = {
  variavel: string;
  dataInicio: string;
  dataFim: string;
  regioes: string[];
  justificativa: string;
  frequencia: string;
};

export type FormData = {
  nomeCompleto: string;
  whatsappEmail: string;
  instituicao: string;
  finalidade: string;
  dataType: string;
  customDataType: string;
  obsGeral: string;
  urgente: boolean;
  mainValues: Variavel[];
  secondaryValues: Variavel[];
};
