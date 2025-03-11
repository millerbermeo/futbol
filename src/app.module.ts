import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UsuariosModule } from './usuarios/usuarios.module';
import { EquiposModule } from './equipos/equipos.module';
import { JugadoresModule } from './jugadores/jugadores.module';
import { CategoriasModule } from './categorias/categorias.module';
import { TorneosModule } from './torneos/torneos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PartidosModule } from './partidos/partidos.module';
import { EstadisticasPartidosModule } from './estadisticas-partidos/estadisticas-partidos.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }),

  TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    entities: [__dirname + '/**/**/*.entity{.ts,.js}'],
    synchronize: true,
    extra: {
      options: '-c timezone=America/Bogota', // Configura la zona horaria
    },
  }),


    UsuariosModule, EquiposModule, JugadoresModule, CategoriasModule, TorneosModule, PartidosModule, EstadisticasPartidosModule],
  providers: [AppService],
})
export class AppModule { }
