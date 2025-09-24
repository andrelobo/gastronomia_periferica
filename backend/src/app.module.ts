import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ProdutosModule } from './produtos/produtos.module';
import { PartesProdutoModule } from './partes-produto/partes-produto.module';
import { EstoqueModule } from './estoque/estoque.module';
import { ReceitasModule } from './receitas/receitas.module';
import { SugestoesModule } from './sugestoes/sugestoes.module';

@Module({
  imports: [AuthModule, UsuariosModule, ProdutosModule, PartesProdutoModule, EstoqueModule, ReceitasModule, SugestoesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}