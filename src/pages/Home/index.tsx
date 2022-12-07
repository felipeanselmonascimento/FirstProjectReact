import { Play } from "phosphor-react";
import { CountdownContainer, FormContainer, HomeContainer, Separator, StartCountDownButton, TaskInput, MinutesAmountInput } from "./styles";



export function Home() {
    return (
        <HomeContainer>
            <form action="">
                <FormContainer>
                    <label htmlFor="task">I'm gonna start working in </label>
                    <TaskInput id="task" placeholder="give a name to your work"/>

                    <label htmlFor="minutesAmount">during</label>
                    <MinutesAmountInput type="number" id="minutesAmount" placeholder="00"/>

                    <span>minutes.</span>
                </FormContainer>
                <CountdownContainer>
                    <span>0</span>
                    <span>1</span>
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