import { Play } from "phosphor-react";
import { CountdownContainer, FormContainer, HomeContainer, Separator } from "./styles";



export function Home() {
    return (
        <HomeContainer>
            <form action="">
                <FormContainer>
                    <label htmlFor="task">I'm gonna start working in </label>
                    <input id="task" />

                    <label htmlFor="minutes">during</label>
                    <input type="number" id="minutesAmount" />

                    <span>minutes.</span>
                </FormContainer>
                <CountdownContainer>
                    <span>0</span>
                    <span>1</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>
                </CountdownContainer>
                <button type="submit">
                    <Play size={24} />
                    Start
                </button>
            </form>
        </HomeContainer>
    )
}