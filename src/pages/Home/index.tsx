import { Play } from "phosphor-react";
import { CountdownContainer, FormContainer, HomeContainer, Separator, StartCountDownButton, TaskInput, MinutesAmountInput } from "./styles";



export function Home() {
    return (
        <HomeContainer>
            <form action="">
                <FormContainer>
                    <label htmlFor="task">I'm gonna start working in </label>
                    <TaskInput id="task"  list="task-suggestions" placeholder="give a name to your work"/>

                    <datalist id="task-suggestions">
                        <option value="projeto 1"></option>
                        <option value="projeto 2"></option>
                        <option value="projeto 3"></option>
                    </datalist>

                    <label htmlFor="minutesAmount">during</label>
                    <MinutesAmountInput
                        type="number"
                        id="minutesAmount"
                        placeholder="00"
                        step={5}
                        min={5}
                        max={60}
                    />

                    <span>minutes.</span>
                </FormContainer>
                <CountdownContainer>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>
                </CountdownContainer>
                <StartCountDownButton disabled type="submit">
                    <Play size={24} />
                    Start
                </StartCountDownButton>
            </form>
        </HomeContainer>
    )
}