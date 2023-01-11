export const errorSchedulingConflicts = (count: number) => (
  <>
    <h5>
      Novo agendamento não pode ocupar o mesmo periodo de outro já existentes
    </h5>
    <h6>
      Conflitos Identificados: <strong>{count}</strong>
    </h6>
  </>
);
export const errorSchedulingEndBiggerThanStart = () => (
  <>
    <h5>
      Data inserida no campo 'Dia e horário de fim' deve ser menor que o 'Dia e
      horário de início'
    </h5>
    <h6>
      Favor selecionar horarios compatíveis... (Considerando a partir de 1min)
    </h6>
  </>
);
