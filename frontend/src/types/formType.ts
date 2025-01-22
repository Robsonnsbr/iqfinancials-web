export type Section = "mainValues" | "secondaryValues";

export type Variavel = {
  currencyOrUnit: string;
  variavel: string;
  dataInicio: string;
  dataFim: string;
  regioes: string[];
  outrosRegiao?: string;
  justificativa: string;
  frequencia: string;
};

export type FormData = {
  nomeCompleto: string;
  whatsappEmail: string;
  instituicao: string;
  finalidade: string;
  customPurpose: string;
  dataType: string;
  customDataType: string;
  obsGeral: string;
  urgente: boolean;
  mainValues: Variavel[];
  secondaryValues: Variavel[];
};
