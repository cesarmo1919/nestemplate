import { ApiProperty } from '@nestjs/swagger';

export class CreateEmployeeDto {
  @ApiProperty()
  readonly phone: string;

  @ApiProperty()
  readonly email: string;

  @ApiProperty({ type: String })
  readonly firstname: string;

  @ApiProperty({ type: String })
  readonly lastname: string;

  @ApiProperty({ type: String })
  readonly role: string;

  @ApiProperty({ type: Boolean })
  readonly isActif: boolean;

  @ApiProperty({ type: String })
  readonly businessUnit: string;
}
