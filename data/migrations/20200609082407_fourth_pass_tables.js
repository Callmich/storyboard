// Adding story_number
exports.up = function(knex) {
  // return(knex.schema
  //   .createTable('projects', projects=> {
  //     projects.increments('project_id');
  //     projects.string('project_name', 100)
  //       .unique()
  //       .notNullable();
  //     projects.text('project_summary');
  //     projects.text('project_notes');
  //   })
  //   .createTable('stories', stories => {
  //       stories.increments('story_id');
  //       stories.float('story_number')
  //         .unique()
  //         .notNullable();
  //       stories.string('story_name', 100)
  //         .unique()
  //         .notNullable();
  //       stories.text('story_summary');
  //       stories.text('story_notes');
  //       stories.integer('project_id')
  //           .notNullable()
  //           .references('project_id')
  //           .inTable('projects')
  //           .onDelete('RESTRICT')
  //           .onUpdate('CASCADE');
  //   })
  //     .createTable('characters', char => {
  //       char.increments('character_id');
  //       char.string('character_name', 100)
  //         .unique()
  //         .notNullable();
  //       char.string('character_type', 100);
  //       char.integer('character_age');
  //       char.string('character_gender_identity', 100);
  //       char.string('character_role', 100);
  //       char.text('character_physical_desc');
  //       char.text('character_notes');
  //       char.string('character_status', 100);
  //       char.integer('project_id')
  //         .notNullable()
  //         .references('project_id')
  //         .inTable('projects')
  //         .onDelete('RESTRICT')
  //         .onUpdate('CASCADE');
  //   })
  //     .createTable('settings', sett => {
  //       sett.increments('setting_id');
  //       sett.string('setting_name', 100)
  //         .unique()
  //         .notNullable();
  //       sett.string('setting_time', 100);
  //       sett.text('setting_desc');
  //       sett.text('setting_background');
  //       sett.text('setting_activities');
  //       sett.integer('project_id')
  //         .notNullable()
  //         .references('project_id')
  //         .inTable('projects')
  //         .onDelete('RESTRICT')
  //         .onUpdate('CASCADE');
  //   })
  //     .createTable('scenes', scenes => {
  //       scenes.increments('scene_id');
  //       scenes.string('scene_name', 100)
  //         .unique()
  //         .notNullable();
  //       scenes.float('scene_number')
  //         .unique()
  //         .notNullable();
  //       scenes.text('scene_summary');
  //       scenes.text('scene_notes');
  //       scenes.integer('story_id')
  //         .notNullable()
  //         .references('story_id')
  //         .inTable('stories')
  //         .onDelete('RESTRICT')
  //         .onUpdate('CASCADE');
  //       scenes.string('scene_timespan', 100);
  //   })
  //     .createTable('story_characters', storChar => {
  //       storChar.increments('story_character_id');
  //       storChar.integer('story_id')
  //         .notNullable()
  //         .references('story_id')
  //         .inTable('stories')
  //         .onDelete('RESTRICT')
  //         .onUpdate('CASCADE');
  //       storChar.integer('character_id')
  //         .notNullable()
  //         .references('character_id')
  //         .inTable('characters')
  //         .onDelete('RESTRICT')
  //         .onUpdate('CASCADE');
  //       storChar.text('story_character_pov_changes');
  //   })
  //     .createTable('story_settings', storSett => {
  //       storSett.increments('story_setting_id');
  //       storSett.integer('story_id')
  //         .notNullable()
  //         .references('story_id')
  //         .inTable('stories')
  //         .onDelete('RESTRICT')
  //         .onUpdate('CASCADE');
  //       storSett.integer('setting_id')
  //         .notNullable()
  //         .references('setting_id')
  //         .inTable('settings')
  //         .onDelete('RESTRICT')
  //         .onUpdate('CASCADE');
  //   })
  //     .createTable('scene_characters', sceneChar => {
  //       sceneChar.increments('scene_character_id');
  //       sceneChar.integer('scene_id')
  //         .notNullable()
  //         .references('scene_id')
  //         .inTable('scenes')
  //         .onDelete('RESTRICT')
  //         .onUpdate('CASCADE');
  //       sceneChar.integer('character_id')
  //         .notNullable()
  //         .references('character_id')
  //         .inTable('characters')
  //         .onDelete('RESTRICT')
  //         .onUpdate('CASCADE');
  //       sceneChar.text('scene_character_pov_changes');
  //   })
  //     .createTable('scene_settings', sceneSett => {
  //       sceneSett.increments('scene_setting_id');
  //       sceneSett.integer('scene_id')
  //         .notNullable()
  //         .references('scene_id')
  //         .inTable('scenes')
  //         .onDelete('RESTRICT')
  //         .onUpdate('CASCADE');
  //       sceneSett.integer('setting_id')
  //         .notNullable()
  //         .references('setting_id')
  //         .inTable('settings')
  //         .onDelete('RESTRICT')
  //         .onUpdate('CASCADE');
  //   })
  //     .createTable('character_settings', charSett => {
  //       charSett.increments('character_setting_id');
  //       charSett.integer('character_id')
  //         .notNullable()
  //         .references('character_id')
  //         .inTable('characters')
  //         .onDelete('RESTRICT')
  //         .onUpdate('CASCADE');
  //       charSett.integer('setting_id')
  //         .notNullable()
  //         .references('setting_id')
  //         .inTable('settings')
  //         .onDelete('RESTRICT')
  //         .onUpdate('CASCADE');
  //   })
  //   )
};

exports.down = function(knex) {
  // return knex.schema
  //   .dropTableIfExists('character_settings')
  //   .dropTableIfExists('scene_settings')
  //   .dropTableIfExists('scene_characters')
  //   .dropTableIfExists('story_settings')
  //   .dropTableIfExists('story_characters')
  //   .dropTableIfExists('scenes')
  //   .dropTableIfExists('settings')
  //   .dropTableIfExists('characters')
  //   .dropTableIfExists('stories')
  //   .dropTableIfExists('projects')
};
