import { InputLabel, InputLabelText, StyledBaseInput } from './style'

interface BaseInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  labelText?: string
}

export function BaseInput({
  labelText,
  style,
  value,
  ...baseinputprops
}: BaseInputProps) {
  return (
    <InputLabel style={style}>
      <StyledBaseInput value={value} {...baseinputprops} />
      {labelText && !value && <InputLabelText>{labelText}</InputLabelText>}
    </InputLabel>
  )
}
