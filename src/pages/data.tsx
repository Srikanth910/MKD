export function createData(
  first_name: string,
  last_name: string,
  dateof_birth: string,
  member_id: string,
  address: string,
  status: string,
  effective_date: string,
  term_date: string,
  company: string,
  lineof_business: string,
  plan_code: number,
  plan_desc: string,
  contract_number: string,
  pbp_number: string,
  pcp: string,
  pcp_name: string,
  ipa_code: string,
  ipa_name: string
) {
  return {
    first_name,
    last_name,
    dateof_birth,
    member_id,
    address,
    status,
    effective_date,
    term_date,
    company,
    lineof_business,
    plan_code,
    plan_desc,
    contract_number,
    pbp_number,
    pcp,
    pcp_name,
    ipa_code,
    ipa_name,
  };
}

export const rows = [
  createData(
    "Alex",
    "james",
    "16-09-1943",
    "1234",
    "1-25,USA",
    "Eligible",
    "18-09-2021",
    "19-09-2021",
    "MHK",
    "UNIFY",
    4,
    "ADULT BENEFIT",
    "1231231234",
    "2222222",
    "1203278",
    "Thomas",
    "GPADT01",
    "GPAD02 Group"
  ),
  createData(
    "Tom",
    "Jhon",
    "10-09-1997",
    "1234",
    "1-25,Australia",
    "NotEligible",
    "1-09-2021",
    "13-09-2021",
    "MHK",
    "UNIFY",
    4,
    "ADULT BENEFIT",
    "1231231234",
    "2222222",
    "1203278",
    "Thomas",
    "GPADT01",
    "GPAD02 Group"
  ),
  createData(
    "Rock",
    "Tony",
    "10-07-2021",
    "1234",
    "1-25,USA",
    "NotEligible",
    "10-09-2021",
    "6-09-2021",
    "MHK",
    "UNIFY",
    4,
    "ADULT BENEFIT",
    "1231231234",
    "2222222",
    "1203278",
    "Thomas",
    "GPADT01",
    "GPAD02 Group"
  ),
  createData(
    "Sri",
    "Gordon",
    "1-09-2021",
    "5678",
    "1-25,UK",
    "Eligible",
    "16-09-2021",
    "8-09-2021",
    "MHK",
    "UNIFY",
    4,
    "ADULT BENEFIT",
    "1231231234",
    "2222222",
    "1203278",
    "Thomas",
    "GPADT01",
    "GPAD02 Group"
  ),
  createData(
    "Aryan",
    "Tony",
    "9-09-2021",
    "5678",
    "1-25,France",
    "Eligible",
    "12-09-2021",
    "2-09-2021",
    "MHK",
    "UNIFY",
    4,
    "ADULT BENEFIT",
    "1231231234",
    "2222222",
    "1203278",
    "Thomas",
    "GPADT01",
    "GPAD02 Group"
  ),
];

export function createDatamain(
  ACTION: any,
  PROVIDER_NAME: string,
  NPI: number | string,
  DEA: number | string,
  SPECALITY: string,
  NETWORK: string,
  ADDRESS: string | number,
  FAX_NUMBER: number,
  PROVIDER_TYPE: string
) {
  return {
     ACTION,
    PROVIDER_NAME,
    NPI,
    DEA,
    SPECALITY,
    NETWORK,
    ADDRESS,
    FAX_NUMBER,
    PROVIDER_TYPE,
  };
}

export function createicdData(
  ACTION: any,
  ICD_NUMBER: any,
  DESCRIPTION: any,
  NETWORK: any,
  ADDRESS: any,
  SPECALITY: any
) {
  return { ACTION, ICD_NUMBER, DESCRIPTION, NETWORK, ADDRESS, SPECALITY };
}

export function documentData(document_name: any, last_name: any, dateof_birth: any) {
  return { document_name, last_name, dateof_birth };
}

export function NoteData(note_text: any, last_name: any, dateof_birth: any) {
  return { note_text, last_name, dateof_birth };
}

export function createData1(
  idccodes: string,
  description: string,
) {
  return {
    idccodes,
    description,
  };
}
