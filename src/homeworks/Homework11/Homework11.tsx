import { ChangeEvent, useEffect, useState } from "react";
import Input from "../../components/Input/Input";
import { Homework11Container, Result } from "./styles";

function Homework11() {
  const [note, setNote] = useState<string>("");
  const [additNote, setAdditNote] = useState<string>("");
  const [countNoteChange, setCountNoteChange] = useState<number>(0);

  const onChangeNote = (event: ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
  };

  const onAdditChangeNote = (event: ChangeEvent<HTMLInputElement>) => {
    setAdditNote(event.target.value);
  };

  //   useEffect(() => {
  //       if (note) {
  //           setCountNoteChange((prevValue) => prevValue + 1)
  //       }
  //   }, [note]);

  useEffect(() => {
    setCountNoteChange((prevValue) => prevValue + 1);
  }, [note]);

  return (
    <Homework11Container>
      <Input
        name="note"
        placeholder="Enter your note..."
        value={note}
        onChange={onChangeNote}
      />
      <Result>
        {/* Quantity of changes in field 'Note' - 
        {countNoteChange === -1 ? 0 : countNoteChange} */}
        Quantity of changes in field 'Note' - 
        {countNoteChange-1}              
      </Result>
      <Input
        name="note-addition"
        placeholder="Enter your additional note..."
        value={additNote}
        onChange={onAdditChangeNote}
      />
    </Homework11Container>
  );
}

export default Homework11;
