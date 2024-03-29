import { Equals, IsEmail, IsNotEmpty, IsOptional, Matches } from "class-validator";
import { Match } from "src/decorators/match.decorator";

export class RegisterUserDto {
    @IsOptional()
    name?: string

    @IsOptional()
    surname?: string

    @IsNotEmpty()
    @IsEmail()
    email: string

    @IsNotEmpty()
    @Matches(/^(?=.*\d)[A-Za-z.\s_-]+[\w~@#$%^&*+=`|{}:;!.?"()[\]-]{6,}/, {
        message: 'Password must have at least one number, lower and uppercase letetr and it has to be longer then 5 characters.'
    })
    password: string

    @IsNotEmpty()
    @Match(RegisterUserDto, (field) => field.password, {message: 'Passwords do not match.'})
    confirm_password: string
}