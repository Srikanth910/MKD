export function createDatamain(
    ACTION,
    PROVIDER_NAME,
    NPI,
    DEA,
    SPECALITY,
    NETWORK,
    ADDRESS,
    FAX_NUMBER,
    PROVIDER_TYPE
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
    ACTION,
    ICD_NUMBER,
    DESCRIPTION,
    NETWORK,
    ADDRESS,
    SPECALITY
  ) {
    return { ACTION, ICD_NUMBER, DESCRIPTION, NETWORK, ADDRESS, SPECALITY };
  }
  
  export function documentData(document_name, last_name, dateof_birth) {
    return { document_name, last_name, dateof_birth };
  }
  
  export function NoteData(note_text, last_name, dateof_birth) {
    return { note_text, last_name, dateof_birth };
  }
  
  export function createData1(
    idccodes,
    description,
  ) {
    return {
      idccodes,
      description,
    };
  }
  