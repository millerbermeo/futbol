import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { EquiposModule } from './equipos/equipos.module';
import { JugadoresModule } from './jugadores/jugadores.module';
import { CategoriasModule } from './categorias/categorias.module';
import { TorneosModule } from './torneos/torneos.module';

@Module({
  imports: [UsuariosModule, EquiposModule, JugadoresModule, CategoriasModule, TorneosModule],
  providers: [AppService],
})
export class AppModule {}
