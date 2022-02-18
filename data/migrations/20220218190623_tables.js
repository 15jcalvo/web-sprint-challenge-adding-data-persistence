exports.up = async function(knex) {
    await knex.schema
        .createTable('projects', table => {
            table.increments('project_id')
            table.text('project_name').notNullable().unique()
            table.text('project_description')
            table.boolean('project_completed').defaultTo(false)
    })
};

exports.down = async function(knex) {
    await knex.schema
        .dropTableIfExists('projects')
};
