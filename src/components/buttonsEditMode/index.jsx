import { Button, EditModeStyle } from "./styled";

const ButtonsEditMode = ({ editMode, setEditMode, isPassword, children }) => {
  return (
    <>
      {!!editMode === false && (
        <Button onClick={() => setEditMode(!editMode)}>Editar</Button>
      )}
      {!!editMode === true && (
        <EditModeStyle>
          <Button editMode={editMode} onClick={() => setEditMode(false)}>
            Cancelar
          </Button>
          <Button isPassword={isPassword} type="submit">{children}</Button>
        </EditModeStyle>
      )}
    </>
  );
};

export { ButtonsEditMode }
