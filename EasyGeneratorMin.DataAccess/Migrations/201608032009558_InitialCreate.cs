namespace EasyGeneratorMin.DataAccess.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialCreate : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.t_course_data",
                c => new
                    {
                        Id = c.Guid(nullable: false),
                        Description = c.String(nullable: false),
                        Title = c.String(nullable: false, maxLength: 255),
                        Creater = c.String(nullable: false),
                        CreatedDate = c.DateTime(nullable: false),
                        LastUpdatedDate = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.t_section_data",
                c => new
                    {
                        Id = c.Guid(nullable: false),
                        Title = c.String(nullable: false, maxLength: 255),
                        Creater = c.String(nullable: false),
                        CreatedDate = c.DateTime(nullable: false),
                        LastUpdatedDate = c.DateTime(nullable: false),
                        Course_Id = c.Guid(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.t_course_data", t => t.Course_Id, cascadeDelete: true)
                .Index(t => t.Course_Id);
            
            CreateTable(
                "dbo.t_select_question_data",
                c => new
                    {
                        Id = c.Guid(nullable: false),
                        Type = c.String(),
                        Title = c.String(nullable: false, maxLength: 255),
                        Creater = c.String(nullable: false),
                        CreatedDate = c.DateTime(nullable: false),
                        LastUpdatedDate = c.DateTime(nullable: false),
                        Discriminator = c.String(nullable: false, maxLength: 128),
                        Section_Id = c.Guid(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.t_section_data", t => t.Section_Id, cascadeDelete: true)
                .Index(t => t.Section_Id);
            
            CreateTable(
                "dbo.t_select_answer_data",
                c => new
                    {
                        Id = c.Guid(nullable: false),
                        IsCorrectly = c.Boolean(nullable: false),
                        Title = c.String(nullable: false, maxLength: 255),
                        Creater = c.String(nullable: false),
                        CreatedDate = c.DateTime(nullable: false),
                        LastUpdatedDate = c.DateTime(nullable: false),
                        SelectQuestion_Id = c.Guid(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.t_select_question_data", t => t.SelectQuestion_Id, cascadeDelete: true)
                .Index(t => t.SelectQuestion_Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.t_section_data", "Course_Id", "dbo.t_course_data");
            DropForeignKey("dbo.t_select_question_data", "Section_Id", "dbo.t_section_data");
            DropForeignKey("dbo.t_select_answer_data", "SelectQuestion_Id", "dbo.t_select_question_data");
            DropIndex("dbo.t_select_answer_data", new[] { "SelectQuestion_Id" });
            DropIndex("dbo.t_select_question_data", new[] { "Section_Id" });
            DropIndex("dbo.t_section_data", new[] { "Course_Id" });
            DropTable("dbo.t_select_answer_data");
            DropTable("dbo.t_select_question_data");
            DropTable("dbo.t_section_data");
            DropTable("dbo.t_course_data");
        }
    }
}
