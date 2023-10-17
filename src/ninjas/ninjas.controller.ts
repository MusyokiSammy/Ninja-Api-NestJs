import { Controller } from '@nestjs/common';

@Controller('ninjas')
export class NinjasController {}

// GET /ninjas --> []
// GET /ninjas/:id --> {id: string}
// POST /ninjas/
// PUT /ninjas/:id --> {id: string}
// DELETE /ninjas/:id --> {id: string}
