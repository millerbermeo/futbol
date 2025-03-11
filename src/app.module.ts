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
import { MulterModule } from '@nestjs/platform-express';
import { EstadiosModule } from './estadios/estadios.module';
import { SancionesModule } from './sanciones/sanciones.module';
import { InscripionesModule } from './inscripiones/inscripiones.module';
import { PagosModule } from './pagos/pagos.module';



@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }),
  MulterModule.register({
    dest: './uploads'
  })
  ,

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


    UsuariosModule, EquiposModule, JugadoresModule, CategoriasModule, TorneosModule, PartidosModule, EstadisticasPartidosModule, EstadiosModule, SancionesModule, InscripionesModule, PagosModule],
  providers: [AppService],
})
export class AppModule { }
