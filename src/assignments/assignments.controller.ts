import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {
  @Get('fibonacci/:n')
  getFibonacciSequence(@Param('n') n: string): { sequence: number[] } {
    const num = parseInt(n);
    if (isNaN(num) || num < 1) {
      return { sequence: [] };
    }

    const sequence = this.generateFibonacci(num);
    return { sequence };
  }

  private generateFibonacci(n: number): number[] {
    const fibSequence = [0, 1];
    for (let i = 2; i < n; i++) {
      fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
    }
    return fibSequence.slice(0, n);
  }
}
