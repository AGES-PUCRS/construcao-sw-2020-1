import { Controller, Post, Body, Res, Get, Delete, Param, Put, Patch } from '@nestjs/common';
import { AulaModel } from './aula.model';
import { AulaService } from './aula.service';

@Controller('aula')
export class AulaController {
    constructor(private readonly service: AulaService) { }

    @Post()
    async create(@Body() model: AulaModel, @Res() res) {
        try {
            const user = await this.service.create(model);
            return res.status(200).json(user);
        } catch (e) {
            return res.status(500).json(e);
        }
    }

    @Get()
    async get(@Res() res): Promise<AulaModel[]> {
        try {
            const users = await this.service.get();
            return res.status(200).json(users);
        } catch (e) {
            return res.status(500).json(e);
        }
    }

    @Delete(':id')
    async remove(@Param('id') id: string, @Res() res) {
        try {
            this.service.deleteByObjectId(id);
            return res.status(200).json({message:'Discilpina deletada'})
        } catch (e) {
            return res.status(500).json(e);
        }
    }

    @Get(':id')
    async getById(@Param('id') id: string, @Res() res): Promise<AulaModel>{
        try{
            var user = await this.service.findOneById(id);
            return res.status(200).json(user);
        }
        catch(e){
            return res.status(500).json(e);
        }
    }

    @Put(':id')
    async put(@Param('id') id: string, @Body() model: AulaModel, @Res() res): Promise<AulaModel>{
        try{
            var user = await this.service.update(model, id);
            return res.status(200).json(user);
        }
        catch(e){
            return res.status(500).json(e);
        }
    }

    @Patch(':id')
    async patch(@Param('id') id: string, @Body() model: AulaModel, @Res() res): Promise<AulaModel>{
        try{
            var user = await this.service.replace(model, id);
            return res.status(200).json(user);
        }
        catch(e){
            return res.status(500).json(e);
        }
    }
}
