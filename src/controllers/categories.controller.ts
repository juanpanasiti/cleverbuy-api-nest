import { Controller, Get, Param, Query } from '@nestjs/common';
// Param -> Path Params
// Query -> Query Params
// import { SomeService } from '../services/some.service';

@Controller('categories')
export class CategoriesController {
    // constructor() {}

    @Get()
    getCategories(@Query() params: PaginateParams): string {
        const { limit = 20, offset = 0 } = params;
        return `categoríes paginated with limit(${limit}) and offset(${offset})`;
    }

    // @Get(':id')
    // getCategoryById(@Param() params: any): string {
    //     return `Category #${params.id}`;
    // }

    @Get(':id/:other')
    getCategoryById(@Param() params: any): string {
        const { id, other } = params;
        return `Category #${id}-${other}`;
    }
}

interface PaginateParams {
    limit?: number;
    offset?: number;
}
