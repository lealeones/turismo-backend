import { Module } from '@nestjs/common';
import { TicketsTransactionService } from './tickets-transaction.service';
import { TicketsTransactionResolver } from './tickets-transaction.resolver';

@Module({
  providers: [TicketsTransactionResolver, TicketsTransactionService],
})
export class TicketsTransactionModule {}
