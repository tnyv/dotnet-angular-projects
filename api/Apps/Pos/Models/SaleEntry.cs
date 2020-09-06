namespace Api.Apps.Pos.Models
{
    public class SaleEntry
    {
        public int Id { get; set; }
        public string Date { get; set; }
        public double Total { get; set; }
        public string PaymentType { get; set; }
        public double Cash { get; set; }
        public double Change { get; set; }
    }
}
